
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
  
};

const login = async (req, res) => {
 
};

const forgetPassword = async (req, res) => {
 
};

const resetPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the provided old password with the stored hashed password
    const isMatch = await user.comparePassword(oldPassword);

    // Check if the old password matches
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid old password" });
    }

    // Update the user's password
    user.password = newPassword;

    // Save the updated user document
    await user.save();

    // Send a success response
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred during password reset", details: error.message });
  }
};


const completeUserProfile = async (req, res) => {
  try {
    // Extract user ID from the request body or parameters sent by the frontend
    const { userId } = req.body; // Assuming userId is sent in the request body
    // const { userId } = req.params; // If userId is sent as a parameter in the URL

    // Check if the user exists based on the provided userId
    const user = await User.findById(userId);

    // If user does not exist, return an error response
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user profile information based on the request body
    user.fullName = req.body.fullName || user.fullName;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.dob = req.body.dob || user.dob;
    user.nationality = req.body.nationality || user.nationality;
    user.academicBackground = req.body.academicBackground || user.academicBackground;
    user.studyPreferences = req.body.studyPreferences || user.studyPreferences;
    user.universityPreferences = req.body.universityPreferences || user.universityPreferences;
    user.studyGoalsAndCareerAspirations = req.body.studyGoalsAndCareerAspirations || user.studyGoalsAndCareerAspirations;
    user.additionalInformation = req.body.additionalInformation || user.additionalInformation;
    user.consentAndAgreement = req.body.consentAndAgreement || user.consentAndAgreement;

    // Save the updated user profile
    await user.save();

    // Send a success response
    res.status(200).json({ message: 'User profile updated successfully', user });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'An error occurred while updating user profile', details: error.message });
  }
};


const getUserProfile = async (req, res) => {
  try {
    // Extract user ID from request parameters
    const userId = req.query.userId;
    console.log(userId)

    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send the user profile data in the response
    res.status(200).json({ user });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'An error occurred while fetching user profile', details: error.message });
  }
};

module.exports = { signup, login, forgetPassword, resetPassword, completeUserProfile, getUserProfile };
