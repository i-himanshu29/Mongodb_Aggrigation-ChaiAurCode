// List all unique eye colors present in the collection.

[
    {
      $group:{
        _id:"$eyeColor"
      }
    }
  ]