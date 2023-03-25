import { useEffect } from "react";
import { useState } from "react";
import InputField from "./component/inputField";
import drug1 from "./utils/drug1.json";
import drug2 from "./utils/drug2.json";

function App() {
  const [formData, setFormData] = useState({});
  const [json,setJson] = useState([]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
  }

  useEffect(()=>{
    setJson(drug2["fields"])
  },[])

  return (
    <div className="App">
      <p className="heading">Personal Information</p>
      <p className="desc">"We hope to inspire a culture of self-governed professionals with high ethical values, focussed on value impact for our customers & stake holders."</p>
      <hr/>
      <form className="form" onSubmit={handleForm}>
        {json.sort((a, b) => a.order - b.order).map((item) => (
          <InputField key={item["key"]} item={item} handleForm={handleForm} />
        ))}
        <input
          className="submit"
          type="submit"
          name="Submit"
          value="Submit"
          onClick={() => console.log(formData)}
        />
      </form>
    </div>
  );
}

export default App;
