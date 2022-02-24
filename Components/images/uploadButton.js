export function UploadButton({email,setImageUrl}) {
    const onChange = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('inputFile', file);
        formData.append('email',email)

        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          setImageUrl(data.secure_url);
        } catch (error) {
          console.log("Error", error);
           //return res.json(error);
        } finally {
          //
        }
      };

    
  
    return (<input class ="form-control" type="file" onChange={onChange} />)
  }
  