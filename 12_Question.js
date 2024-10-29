// Categorize users by their favorite fruit.

[
    {
      $group:{
        _id:"$favoriteFruit",
        users:{$push:"$name"}
      }
    }
  ]