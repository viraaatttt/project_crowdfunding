import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3 } from "../../context/Web3Context";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Card from "../ui/Card";
import { createCampaign } from "../../lib/contractHelpers";

const CampaignForm = () => {
  const navigate = useNavigate();
  const { user, provider } = useWeb3();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    targetAmount: "",
    duration: "30",
  });
  
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    targetAmount: "",
    duration: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      title: "",
      description: "",
      imageUrl: "",
      targetAmount: "",
      duration: "",
    };
    let isValid = true;
    
    if (!form.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }
    
    if (!form.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }
    
    if (!form.imageUrl.trim()) {
      newErrors.imageUrl = "Image URL is required";
      isValid = false;
    } else if (!form.imageUrl.match(/^https?:\/\/.+\..+/)) {
      newErrors.imageUrl = "Please enter a valid URL";
      isValid = false;
    }
    
    if (!form.targetAmount) {
      newErrors.targetAmount = "Target amount is required";
      isValid = false;
    } else if (parseFloat(form.targetAmount) <= 0) {
      newErrors.targetAmount = "Target amount must be greater than 0";
      isValid = false;
    }
    
    if (!form.duration) {
      newErrors.duration = "Duration is required";
      isValid = false;
    } else if (parseInt(form.duration) < 1 || parseInt(form.duration) > 365) {
      newErrors.duration = "Duration must be between 1 and 365 days";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!user || !provider) {
      alert("Please connect your wallet first");
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Calculate deadline timestamp
      const deadline = new Date();
      deadline.setDate(deadline.getDate() + parseInt(form.duration));
      
      const success = await createCampaign(
        form.title,
        form.description,
        form.imageUrl,
        parseFloat(form.targetAmount),
        deadline.getTime(),
        provider
      );
      
      if (success) {
        alert("Campaign created successfully!");
        navigate("/campaigns");
      } else {
        alert("Failed to create campaign. Please try again.");
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("An error occurred while creating the campaign.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create a New Campaign</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          id="title"
          name="title"
          label="Campaign Title"
          placeholder="Enter a catchy title for your campaign"
          value={form.title}
          onChange={handleChange}
          error={errors.title}
          required
        />
        
        <Textarea
          id="description"
          name="description"
          label="Campaign Description"
          placeholder="Describe your campaign in detail..."
          value={form.description}
          onChange={handleChange}
          error={errors.description}
          rows={4}
          required
        />
        
        <Input
          id="imageUrl"
          name="imageUrl"
          label="Cover Image URL"
          placeholder="https://example.com/image.jpg"
          value={form.imageUrl}
          onChange={handleChange}
          error={errors.imageUrl}
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="targetAmount"
            name="targetAmount"
            label="Target Amount (ETH)"
            type="number"
            step="0.01"
            min="0"
            placeholder="1.00"
            value={form.targetAmount}
            onChange={handleChange}
            error={errors.targetAmount}
            required
          />
          
          <Input
            id="duration"
            name="duration"
            label="Duration (days)"
            type="number"
            min="1"
            max="365"
            placeholder="30"
            value={form.duration}
            onChange={handleChange}
            error={errors.duration}
            required
          />
        </div>
        
        <div className="pt-4">
          <Button
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            disabled={isSubmitting || !user}
          >
            Create Campaign
          </Button>
          
          {!user && (
            <p className="mt-2 text-center text-sm text-red-600">
              Please connect your wallet to create a campaign
            </p>
          )}
        </div>
      </form>
    </Card>
  );
};

export default CampaignForm;