// netlify/functions/upvote-feature-request.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { recordId } = JSON.parse(event.body);

    if (!recordId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Record ID is required' })
      };
    }

    // First, get the current upvote count from Table 2
    const getResponse = await fetch(
      `https://api.airtable.com/v0/appTdGGAOwnN8q4D8/Table%202/${recordId}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const currentData = await getResponse.json();

    if (!getResponse.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to fetch record', error: currentData.error })
      };
    }

    const currentUpvotes = currentData.fields.Upvotes || 0;

    // Update with incremented upvote count in Table 2
    const updateResponse = await fetch(
      `https://api.airtable.com/v0/appTdGGAOwnN8q4D8/Table%202/${recordId}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            Upvotes: currentUpvotes + 1
          }
        })
      }
    );

    const data = await updateResponse.json();

    if (!updateResponse.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to update upvote', error: data.error })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, upvotes: currentUpvotes + 1 })
    };
  } catch (error) {
    console.error('Upvote error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating upvote', error: error.message })
    };
  }
};
