import {useState} from 'react';

const App = () => {
  
  const [data, setData] = useState("");

  const handleImageUpload = event => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);
  
    fetch('http://localhost:5000/gst', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setData(JSON.stringify(data));
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div>
      <input type="file" onChange={(event) => handleImageUpload(event)}/>
      <div>
        <p>
          {data}
        </p>
      </div>
    </div>
  )
}

export default App;
