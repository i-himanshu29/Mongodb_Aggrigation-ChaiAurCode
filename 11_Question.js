// Who has registered the most recently ?

[
    {
      $sort:{
        registered:-1
      }
    },
    {$limit:4},
    {
      $project:{
        name:1,
        registered:1,
        favoriteFruit:1
      }
    }
  ]