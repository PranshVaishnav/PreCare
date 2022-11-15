import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



function Symptoms() {

  const [data, setData] = useState("No Disease");
  const [symptom1, setSymptom1] = useState("");
  const [symptom2, setSymptom2] = useState("");
  const [symptom3, setSymptom3] = useState("");
  const [symptom4, setSymptom4] = useState("");
  const [symptom5, setSymptom5] = useState("");


  function getDisease() {
    axios.get('http://localhost:5000/disease')
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  }


  function getSymptoms(e) {
    e.preventDefault();
    const symptoms = [
      symptom1, symptom2, symptom3, symptom4, symptom5
    ];
    axios.post('http://localhost:5000/symptoms', { symptoms })
      .then((response) => {
        // getDisease();
        // console.log(getDisease());
        console.log(response);
      })
  }

  const changeSymptom1 = (e, value) => {
    setSymptom1(value);
  }

  const changeSymptom2 = (e, value) => {
    setSymptom2(value);
  }
  const changeSymptom3 = (e, value) => {
    setSymptom3(value);
  }
  const changeSymptom4 = (e, value) => {
    setSymptom4(value);
  }
  const changeSymptom5 = (e, value) => {
    setSymptom5(value);
  }

  const symptomList = [
    "Itching",
    "Skin Rash",
    "Nodal Skin Eruptions",
    "Continuous Sneezing",
    "Shivering",
    "Chills",
    "Joint Pain",
    "Stomach Pain",
    "Acidity",
    "Ulcers On Tongue",
    "Muscle Wasting",
    "Vomiting",
    "Burning Micturition",
    "Spotting Urination",
    "Fatigue",
    "Weight Gain",
    "Anxiety",
    "Cold Hands and Feets",
    "Mood Swings",
    "Weight Loss",
    "Restlessness",
    "Lethargy",
    "Patches In Throat",
    "Irregular Sugar Level",
    "Cough",
    "High Fever",
    "Sunken Eyes",
    "Breathlessness",
    "Sweating",
    "Dehydration",
    "Indigestion",
    "Headache",
    "Yellowish Skin",
    "Dark Urine",
    "Nausea",
    "Loss Of Appetite",
    "Pain Behind The Eyes",
    "Back Pain",
    "Constipation",
    "Abdominal Pain",
    "Diarrhoea",
    "Mild Fever",
    "Yellow Urine",
    "Yellowing Of Eyes",
    "Acute Liver Failure",
    "Fluid Overload",
    "Swelling Of Stomach",
    "Swelled Lymph Nodes",
    "Malaise",
    "Blurred And Distorted Vision",
    "Phlegm",
    "Throat Irritation",
    "Redness Of Eyes",
    "Sinus Pressure",
    "Runny Nose",
    "Congestion",
    "Chest Pain",
    "Weakness In Limbs",
    "Fast Heart Rate",
    "Pain During Bowel Movements",
    "Pain In Anal Region",
    "Bloody Stool",
    "Irritation In Anus",
    "Neck Pain",
    "Dizziness",
    "Cramps",
    "Bruising",
    "Obesity",
    "Swollen Legs",
    "Swollen Blood Vessels",
    "Puffy Face and Eyes",
    "Enlarged Thyroid",
    "Brittle Nails",
    "Swollen Extremeties",
    "Excessive Hunger",
    "Extra Marital Contacts",
    "Drying And Tingling Lips",
    "Slurred Speech",
    "Knee Pain",
    "Hip Joint Pain",
    "Muscle Weakness",
    "Stiff Neck",
    "Swelling Joints",
    "Movement Stiffness",
    "Spinning Movements",
    "Loss Of Balance",
    "Unsteadiness",
    "Weakness Of One Body Side",
    "Loss Of Smell",
    "Bladder Discomfort",
    "Foul Smell Of Urine",
    "Continuous Feel Of Urine",
    "Passage Of Gases",
    "Internal Itching",
    "Toxic Look (Typhos)",
    "Depression",
    "Irritability",
    "Muscle Pain",
    "Altered Sensorium",
    "Red Spots Over Body",
    "Belly Pain",
    "Abnormal Menstruation",
    "Dischromic Patches",
    "Watering From Eyes",
    "Increased Appetite",
    "Polyuria",
    "Family History",
    "Mucoid Sputum",
    "Rusty Sputum",
    "Lack Of Concentration",
    "Visual Disturbances",
    "Receiving Blood Transfusion",
    "Receiving Unsterile Injections",
    "Coma",
    "Stomach Bleeding",
    "Distention Of Abdomen",
    "History Of Alcohol Consumption",
    "Fluid Overload",
    "Blood In Sputum",
    "Prominent Veins On Calf",
    "Palpitations",
    "Painful Walking",
    "Pus Filled pimples",
    "Blackheads",
    "Scurring",
    "Skin Peeling",
    "Silver Like Dusting",
    "Small Dents In Nails",
    "Inflammatory Nails",
    "Blister",
    "Red Sore Around Nose",
    "Yellow Crust Ooze",
  ];


  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ margin: "2.2vh" }}><Autocomplete
            disablePortal
            id="1"
            options={symptomList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Symptoms" />}
            onChange={changeSymptom1}
          />
          </div>

          <div style={{ margin: "2.2vh" }}><Autocomplete
            disablePortal
            id="2"
            options={symptomList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Symptoms" />}
            onChange={changeSymptom2}
          />
          </div>
          <div style={{ margin: "2.2vh" }}>
            <Autocomplete
              disablePortal
              id="3"
              options={symptomList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Symptoms" />}
              onChange={changeSymptom3}
            />
          </div>
          <div style={{ margin: "2.2vh" }}>
            <Autocomplete
              disablePortal
              id="4"
              options={symptomList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Symptoms" />}
              onChange={changeSymptom4}
            />
          </div>
          <div style={{ margin: "2.2vh" }}>
            <Autocomplete
              disablePortal
              id="5"
              options={symptomList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Symptoms" />}
              onChange={changeSymptom5}
            />
          </div>
          <div style={{ margin: "2.2vh" }}>
            <Button variant="contained" onClick={getSymptoms} endIcon={<SendIcon />}>
              Submit
            </Button>
          </div>
        </div>

        <div style={{ width: "22vw" ,padding:"5vh" }}>
          <svg id="full-body" x="0px" y="0px" viewBox="0 0 310 385" space="preserve"
            xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <image href="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/symptom_checker_beta/assets/front-m.png" height="100%" width="100%" x="0" y="0" class="body-bg-img"></image>
          </svg>
        </div>

      </div>

    </>
  )
}
export default Symptoms