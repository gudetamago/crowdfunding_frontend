import { useState } from "react";
import postCampaign from "../api/post-campaign.js";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

function CampaignForm() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goal, setGoal] = useState("");
    const [image, setImage] = useState("");
    const [is_open, setIsOpen] = useState(true);
    const [alt_title, setAltTitle] = useState("");
    const [alt_description, setAltDescription] = useState("");
    const [alt_image, setAltImage] = useState("");
    const [date_end, setDateEnd] = useState("");

    const campaignData = {
        title: title,
        description: description,
        goal: parseFloat(goal),
        image: image,
        is_open: is_open,
        alt_title: alt_title,
        alt_description: alt_description,
        alt_image: alt_image,
        date_end: date_end,
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const timestamp = new Date().toISOString();

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
                navigate(`/campaign/${response.id}`);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Create New Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Campaign Title:</label>
                    <input
                        type="text"
                        id="title"
                        className="form-input"
                        placeholder="Enter campaign title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        id="description"
                        className="form-textarea"
                        placeholder="Describe your campaign in detail..."
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="goal" className="form-label">Funding Goal:</label>
                    <input
                        type="number"
                        min="1"
                        id="goal"
                        className="form-input"
                        value={goal}
                        placeholder="Enter goal amount (e.g. 5000)"
                        onChange={(event) => setGoal(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">Image URL:</label>
                    <input
                        type="url"
                        id="image"
                        className="form-input"
                        placeholder="Enter valid image URL"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                        required
                    />
                </div>
                
                <h3 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>
                    Public Version (for non-logged-in users)
                </h3>
                
                <div className="form-group">
                    <label htmlFor="alt_title" className="form-label">Public Title:</label>
                    <input
                        type="text"
                        id="alt_title"
                        className="form-input"
                        placeholder="Public-friendly campaign title"
                        value={alt_title}
                        onChange={(event) => setAltTitle(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="alt_description" className="form-label">Public Description:</label>
                    <textarea
                        id="alt_description"
                        className="form-textarea"
                        placeholder="Public-friendly campaign description..."
                        value={alt_description}
                        onChange={(event) => setAltDescription(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="alt_image" className="form-label">Public Image URL:</label>
                    <input
                        type="url"
                        id="alt_image"
                        className="form-input"
                        placeholder="Enter valid image URL for public version"
                        value={alt_image}
                        onChange={(event) => setAltImage(event.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="form-button">Create Campaign</button>
            </form>
        </div>
    );
}

export default CampaignForm;