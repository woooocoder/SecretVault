const User = new mongoose.Schema({
  email: String,
  password: String,
  role: String, // admin, dev, readonly
  projects: [String] 
})