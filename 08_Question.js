// How many users have 'enim' as one of their tags ?

// atleast one enim in user
[
    {
      $match:{
        tags:"enim"
      }
    }
]

//...........
[
    {
      $match:{
        tags:"enim"
      }
    },
    {
      $count:"userWithEnimTag"
    }
]

