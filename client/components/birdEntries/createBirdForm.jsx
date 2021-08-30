import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateBirdForm = () => {
  const [species, setSpecies] = useState('');
  const [fileUpload, setFileUpload] = useState();

  const [notes, setNotes] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [st, setSt] = useState('');

  var key = 'pk.d7d064c84a94d6bb8ce9a8fbca7cc4d0';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude.toString();
      var lon = position.coords.longitude.toString();

      axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${lat}&lon=${lon}&format=json`)
        .then(results => {
          setStreet(results.data.address.house_number + " " + results.data.address.road);
          setCity(results.data.address.city);
          setSt(results.data.address.state);
          setZip(results.data.address.postcode);
        })
        .catch(error => { console.log(error); });
    });
  }, []);

  var handleInputChange = (event, key) => {
    key(event.target.value);
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    var form = document.getElementById('create-entry')
    var formData = new FormData(form);

    axios.get(`https://us1.locationiq.com/v1/search.php?key=${key}&city=${city}&state=${st}&format=json`)
      .then(results => {
        var lat = results.data[0].lat;
        var lon = results.data[0].lon;
        formData.append('latitude', lat);
        formData.append('longitude', lon);
        formData.append('birdpic_url', `/uploads/${fileUpload.name}`);
        if (fileUpload) {
          formData.append(
            "birdImage",
            fileUpload,
            fileUpload.name
          );
        }
      })
      .then(() => {
        axios.post('/createBird', formData)
          .then(results => { console.log(formData) })
          .catch(error => { if (error) console.log(error); });

      })
      .catch(error => { if (error) console.log(error); });
  }

  var handleFileUpload = (event) => {
    setFileUpload(event.target.files[0]);
  }

  return (
    <div>
      <form id="create-entry" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="">Species</label>
          <input className="form-control" type="text" name="bird" onChange={() => { handleInputChange(event, setSpecies) }} />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="">Street</label>
          <input className="form-control" type="text" onChange={() => { handleInputChange(event, setStreet) }} value={street} />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="">City</label>
          <input className="form-control" type="text" name="city_sighted" onChange={() => { handleInputChange(event, setCity) }} value={city} />
          <label className="control-label" htmlFor="">State</label>
          <input className="form-control" type="text" name="state_sighted" onChange={() => { handleInputChange(event, setSt) }} value={st} />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="">Notes</label>
          <textarea className="form-control" name="notes" onChange={() => { handleInputChange(event, setNotes) }}></textarea>
        </div>

        <div className="form-group">
          <input type="file" name="birdPhoto" id="fileUpload" accept="image/*" onChange={() => { handleFileUpload(event) }} />
        </div>
        <div>

          <input type="submit" />
        </div>
      </form >
    </div>

  )
};

export default CreateBirdForm;