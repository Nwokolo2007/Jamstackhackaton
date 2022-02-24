import FormData from 'form-data';


export default async (req, res) => {
    var formData = new FormData()
    try {
        console.log(JSON.stringify(req.body))

        Object.entries(req.body).forEach(([key, value]) => {

            formData.append(key, value);
          });
        const response = await fetch('https://getform.io/f/6673e6dc-f6ac-45b3-a9f9-faadc97c3770', {
          method: 'post',
          body: formData,
        });
        
        return res.json(response);;
      } catch (error) {

       
      } finally {
        
       };
    
};
