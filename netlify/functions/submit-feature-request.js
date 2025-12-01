// netlify/functions/submit-feature-request.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { name, email, role, category, priority, description } = JSON.parse(event.body);

    console.log('=== Feature Request Submission ===');
    console.log('Received data:', { name, email, role, category, priority, description });

    // Basic validation
    if (!name || !email || !role || !category || !priority || !description) {
      console.log('Validation failed: Missing fields');
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'All fields are required' })
      };
    }

    if (!email.includes('@') || !email.includes('.')) {
      console.log('Validation failed: Invalid email');
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid email address' })
      };
    }

    const requestBody = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Role: role,
            Category: category,
            Priority: priority,
            Description: description
          }
        }
      ]
    };

    console.log('Sending to Airtable:', JSON.stringify(requestBody, null, 2));
    console.log('API Key present:', !!process.env.AIRTABLE_API_KEY);

    // Table 2 in the same Airtable base (Contact form uses Table 1)
    const airtableResponse = await fetch('https://api.airtable.com/v0/appTdGGAOwnN8q4D8/Table%202', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const data = await airtableResponse.json();

    console.log('Airtable response status:', airtableResponse.status);
    console.log('Airtable response data:', JSON.stringify(data, null, 2));

    if (!airtableResponse.ok) {
      console.error('Airtable error:', data);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Airtable error', error: data.error?.message || data.error })
      };
    }

    console.log('Success!');
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error('=== Feature Request Error ===');
    console.error('Error message:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting feature request', error: error.message })
    };
  }
};
