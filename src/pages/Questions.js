import React from "react";
import { NavLink } from "react-router-dom";
import { SelectField, TextField, CheckboxField} from '@aws-amplify/ui-react';
import "../styles/questions.css";

const Questions = () => {
  return (
    <div class="mainContent">
      <h1 class="largeHeading"> Questionnaire </h1>
      <div class="sideWaysContainer">
        <div class="triangletext">
          <div class="text">
            <h3> Basic Information </h3>
            <SelectField label="Age">
              <option value="13">13-17</option>
              <option value="18">18-24</option>
              <option value="25">25-34</option>
              <option value="35">35-44</option>
              <option value="45">45-54</option>
              <option value="55">55-64</option>
              <option value="65"> 65+ </option>
            </SelectField>
          </div>
        </div>
      </div>
      <div class="sideWaysContainer">
        <div class="triangletext">
          <div class="text">
            <h3> Educational/Professional Background </h3>
            <SelectField label="What is your occupation ?">
              <option value="Student"> Student </option>
              <option value="Unemployed"> Unemployed </option>
              <option value="Professional"> Professional </option>
            </SelectField>
            <SelectField label="What is the highest level of education that you have completed or are currently pursuing?">
              <option value="Undergraduate Degree"> Undergraduate Degree </option>
              <option value="Graduate Degree"> Graduate Degree</option>
              <option value="Continuing Education"> Continuing Education </option>
              <option value="Certificate Program "> Certificate Program  </option>
              <option value="Other"> Other </option>
            </SelectField>
            <SelectField label="What field of study or industry are you in?">
              <option value="Math and Stats"> Math and Stats </option>
              <option value="Engineering"> Engineering </option>
              <option value="Business and Economics"> Business and Economics </option>
              <option value="Natural Sciences"> Natural Sciences </option>
              <option value="Health Sciences"> Health Sciences </option>
              <option value="Sports Sciences"> Sports Sciences </option>
              <option value="Social Science"> Social Science </option>
              <option value="Humanities"> Humanities </option>
              <option value="Social Work"> Social Work </option>
              <option value="Education"> Education </option>
              <option value="Fine Arts and Design"> Fine Arts and Design </option>
              <option value="Communication and Media Studies"> Communication and Media Studies </option>
              <option value="Other"> Other </option>
            </SelectField>
          </div>
        </div>
      </div>
      <div class="sideWaysContainer">
        <div class="triangletext">
          <div class="text">
            <h3> Learning Styles And Goals </h3>
            <SelectField label="What brings you to our platform? ?">
              <option value="Skill development"> Skill development </option>
              <option value="Hobby"> Hobby </option>
              <option value="Future education in AI"> Future education in AI </option>
              <option value="Career and professional growth"> Career and professional growth </option>
              <option value="Other"> Other </option>
            </SelectField>
            <SelectField label="What is your preferred learning style??">
              <option value="Visual"> Visual (videos, diagrams) </option>
              <option value="Textual"> Textual (reading, writing) </option>
              <option value="Interactive">  Interactive (quizzes, activities) </option>
              <option value="Collaborative "> Collaborative (discussions, group projects)  </option>
              <option value="Other"> Other </option>
            </SelectField>
            <SelectField label="How long do you plan on learning for?">
              <option value="2 weeks"> 2 weeks </option>
              <option value="1 month"> 1 month </option>
              <option value="1-3 months"> 1-3 months </option>
              <option value="4-6 months"> 4-6 months </option>
              <option value="6 months - 1 year"> 6 months - 1 year </option>
              <option value="Other"> Other </option>
            </SelectField>
            <SelectField label="How many hours per week do you plan on dedicating to learning ?">
              <option value="1-2"> 1-2 </option>
              <option value="3-5"> 3-5 </option>
              <option value="6-10"> 6-10 </option>
              <option value="11-15"> 11-15 </option>
              <option value="16-20"> 16-20 </option>
              <option value="20+"> 20+ </option>
              <option value="Not sure"> Not sure </option>
            </SelectField>
            <SelectField label="Rate your comfort level with technology ?">
              <option value="1"> 1- Not comfortable </option>
              <option value="2"> 2- Beginner </option>
              <option value="3"> 3- Somewhat comfortable </option>
              <option value="4"> 4- Comfortable </option>
              <option value="5"> 5- Very comfortable</option>
            </SelectField>
            <TextField label="Do you have any specific requirements or accommodations needed for learning?" size="large" width="100%" />
          </div>
        </div>
      </div>
      <div class="sideWaysContainer">
        <div class="triangletext">
          <div class="text">
          <h3 id="interests"> Intrests and preferences </h3>
            <CheckboxField
              label="Machine Learning Algorithms"
              name="Machine Learning Algorithms"
              value="Machine Learning Algorithms"
            />
            <CheckboxField
              label="Natural Language Processing (NLP)"
              name="Natural Language Processing (NLP)"
              value="Natural Language Processing (NLP)"
            />
            <CheckboxField
              label="Computer Vision"
              name="Computer Vision"
              value="Computer Vision"
            />
            <CheckboxField
              label="Deep Learning"
              name="Deep Learning"
              value="Deep Learning"
            />
            <CheckboxField
              label="Reinforcement Learning"
              name="Reinforcement Learning"
              value="Reinforcement Learning"
            />
            <CheckboxField
              label="Ethics in AI"
              name="Ethics in AI"
              value="Ethics in AI"
            />
            <CheckboxField
              label="AI for Healthcare"
              name="AI for Healthcare"
              value="AI for Healthcare"
            />
            <CheckboxField
              label="Autonomous System"
              name="Autonomous System"
              value="Autonomous System"
            />
            <CheckboxField
              label="AI and Business Strategy"
              name="AI and Business Strategy"
              value="AI and Business Strategy"
            />
            <CheckboxField
              label="Explainable AI"
              name="Explainable AI"
              value="Explainable AI"
            />
            <CheckboxField
              label="AI and Robotics"
              name="AI and Robotics"
              value="AI and Robotics"
            />
            <CheckboxField
              label="AI in Education"
              name="AI in Education"
              value="AI in Education"
            />
            <CheckboxField
              label="AI for Cybersecurity"
              name="AI for Cybersecurity"
              value="AI for Cybersecurity"
            />
            <CheckboxField
              label="AI in Finance"
              name="AI in Finance"
              value="AI in Finance"
            />
            <CheckboxField
              label="AI and Climate Change"
              name="AI and Climate Change"
              value="AI and Climate Change"
            />
            <CheckboxField
              label="Generative Adversarial Networks (GANs)"
              name="Generative Adversarial Networks (GANs)"
              value="Generative Adversarial Networks (GANs)"
            />
            <CheckboxField
              label="AI for Social Good"
              name="AI for Social Good"
              value="AI for Social Good"
            />
            <CheckboxField
              label="AI and Privacy"
              name="AI and Privacy"
              value="AI and Privacy"
            />
            <CheckboxField
              label="Quantum Computing and AI"
              name="Quantum Computing and AI"
              value="Quantum Computing and AI"
            />
            <SelectField label="Do you prefer free or paid learning material (courses)?">
              <option value="Free"> Free </option>
              <option value="Paid"> Paid</option>
              <option value="Hybrid">  Hybrid </option>
              <option value="No preference "> No preference  </option>
            </SelectField>
          </div>
        </div>
      </div>
      <div class="button">
        <NavLink className="about-btn" to="/about">
          Submit
        </NavLink>
      </div>
    </div>
  );
};

export default Questions;
