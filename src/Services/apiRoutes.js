

// Auth Routes 
export const authRoutes = {
    sendotp : 'http://localhost:4000/api/v1/auth/sendotp',
    signup : 'http://localhost:4000/api/v1/auth/signup',
    login : 'http://localhost:4000/api/v1/auth/login',
    changePass : 'http://localhost:4000/api/v1/auth/changepass'
}


//profile routes
export const profileRoutes = {
    getUserDetails : 'http://localhost:4000/api/v1/profile/getuserdetails',
    updateProfile : 'http://localhost:4000/api/v1/profile/updateprofile',
    updateProfilePic : 'http://localhost:4000/api/v1/profile/uploadpicture',
}


//http://localhost:5000/get-prediction?date=1,2,3,4,5&systolic=150,130,140,190,180&diastolic=80,85,90,50,80