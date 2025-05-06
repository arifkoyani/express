function getUsers(req, res) {
  res.status(200).json({
    name: "arif ali",
  });
}

function registerUser(req, res) {
  res.status(200).json({
    message: "user register successfulll",
  });
}

function deleteUser(req, res) {
  res.status(200).json({
    message: "user Delete successfulll",
  });
}

export { deleteUser, registerUser, getUsers };
