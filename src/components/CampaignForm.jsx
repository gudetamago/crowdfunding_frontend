import { useState } from "react";
import postCampaign from "../api/post-campaign.js";
import { useNavigate } from "react-router-dom";


function CampaignForm(props) {

    // console.log(props.campaignId);

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goal, setGoal] = useState();
    const [image, setImage] = useState();
    const [is_open, setIsOpen] = useState(true);
    const [alt_title, setAltTitle] = useState("");
    const [alt_description, setAltDescription] = useState("");
    const [alt_image, setAltImage] = useState("");

    // Unused campaign fields, included here to match the provided code structure
    const [date_end, setDateEnd] = useState();



    const campaignData = {
      
      title: title,
      description: description,
      goal: parseFloat(goal),
      image: image,
      is_open: is_open,
      alt_title: alt_title,
      alt_description: alt_description,
      alt_image: alt_image,

      // Unused campaign fields, included here to match the provided code structure
      date_end: date_end,

      
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Create timestamp in the required format
        const timestamp = new Date().toISOString();

        // Create campaign data with the timestamp
        const submissionData = {
            ...campaignData,
            date_created: timestamp
        };

        if (submissionData.title && submissionData.description && submissionData.goal
            && submissionData.image && submissionData.alt_title && submissionData.alt_description && submissionData.alt_image
        ) {
            postCampaign(
                submissionData.title,
                submissionData.description,
                submissionData.goal,
                submissionData.image,
                submissionData.is_open,
                submissionData.date_created,
                submissionData.alt_title,
                submissionData.alt_description,
                submissionData.alt_image,
                submissionData.date_end
            )
            .then((response) => {
                // console.log(response);
                navigate(`/campaign/${response.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            placeholder="Insert description..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="goal">Goal:</label>
        <input
            type="number"
            min="1"
            id="goal"
            value={goal}
            placeholder="Enter goal amount"
            onChange={(event) => setGoal(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
            type="text"
            id="image"
            placeholder="Enter valid image URL"
            value={image}
            onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="alt_title">Alternative Title:</label>
        <input
            type="text"
            id="alt_title"
            placeholder="Alternate Title"
            value={alt_title}
            onChange={(event) => setAltTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="alt_description">Alternative Description:</label>
        <input
            type="text"
            id="alt_description"
            placeholder="Insert alternate description..."
            value={alt_description}
            onChange={(event) => setAltDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="alt_image">Alternative Image URL:</label>
        <input
            type="text"
            id="alt_image"
            placeholder="Enter valid image URL"
            value={alt_image}
            onChange={(event) => setAltImage(event.target.value)}
        />
      </div>
      
      <button type="submit" onClick={handleSubmit}>Add Campaign</button>
    </form>
  );
}

export default CampaignForm;