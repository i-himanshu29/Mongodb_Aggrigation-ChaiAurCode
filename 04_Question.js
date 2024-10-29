// Find the total number of males and females.

[
    {
      $group:{
        _id:"$gender",
        genderCount:{
          $sum : 1
        }
      }
    }
]

// It is not work always

[
    {
      $group:{
        _id:"$gender",
        count:{
          $count: "$gender"
        }
      }
    }
  ]