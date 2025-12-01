// netlify/functions/get-feature-requests.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Fetch all records from Table 2 (Feature Requests)
    // Sorting by Upvotes descending
    const airtableResponse = await fetch(
      'https://api.airtable.com/v0/appTdGGAOwnN8q4D8/Table%202?sort%5B0%5D%5Bfield%5D=Upvotes&sort%5B0%5D%5Bdirection%5D=desc',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await airtableResponse.json();

    if (!airtableResponse.ok) {
      console.error('Airtable error:', data);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to fetch from Airtable', error: data.error })
      };
    }

    // Transform data to hide personal info and return only what's needed
    const publicRequests = data.records.map(record => ({
      id: record.id,
      role: record.fields.Role || 'User',
      category: record.fields.Category || 'General',
      priority: record.fields.Priority || 'Nice-to-have',
      description: record.fields.Description || '',
      status: record.fields.Status || 'Submitted',
      upvotes: record.fields.Upvotes || 0,
      createdAt: record.createdTime
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, requests: publicRequests })
    };
  } catch (error) {
    console.error('Airtable fetch error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching feature requests', error: error.message })
    };
  }
};
