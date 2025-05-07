function getProducts(req, res) {
  res.status(200).json([
    {
      productName: "shoes",
      Price: 200,
      Brand: "Bata",
      Nation: "pakistan",
    },
    {
      productName: "bag",
      Price: 400,
      Brand: "Bata",
      Nation: "pakistan",
    },
    {
      productName: "shirt",
      Price: 400,
      Brand: "Bata",
      Nation: "pakistan",
    },
    {
      productName: "watch",
      Price: 1500,
      Brand: "j.",
      Nation: "pakistan",
    },
    {
      productName: "cap",
      Price: 150,
      Brand: "j.",
      Nation: "pakistan",
    },
    {
      productName: "head",
      Price: 450,
      Brand: "j.",
      Nation: "pakistan",
    },
    {
      productName: "charger",
      Price: 50.9,
      Brand: "iphone",
      Nation: "pakistan",
    },
    {
      productName: "belt",
      Price: 50,
      Brand: "j.",
      Nation: "pakistan",
    },
    {
      productName: "mobile",
      Price: 5000,
      Brand: "sumsung",
      Nation: "pakistan",
    },
    {
      productName: "car",
      Price: 50000,
      Brand: "toyota",
      Nation: "pakistan",
    },
    {
      productName: "sajid",
      Price: 50000,
      Brand: "nagar",
      Nation: "pakistan",
    },
    {
      productName: "navtacccc",
      Price: 400,
      Brand: "Bata",
      Nation: "pakistan",
    },
  ]);
}

function productAdd(req, res) {
  res.status(200).json({
    message: "product is added successfully",
  });
}
function productDelete(req, res) {
  res.status(200).json({
    message: "product is deleted successfully",
  });
}
function productUpdate(req, res) {
  res.status(200).json({
    message: "products is update successfully",
  });
}

export { getProducts, productAdd, productDelete, productUpdate };
