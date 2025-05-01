// pages/api/submit-contact.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    try {
      const { name, email, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      const airtableResponse = await fetch('https://api.airtable.com/v0/appTdGGAOwnN8q4D8/Table%201', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                Message: message
              }
            }
          ]
        })
      });
      
      const data = await airtableResponse.json();
      
      if (!airtableResponse.ok) {
        throw new Error(data.error || 'Failed to submit to Airtable');
      }
      
      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Airtable submission error:', error);
      return res.status(500).json({ message: 'Error submitting form', error: error.message });
    }
  }