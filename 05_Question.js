// Which country has the highest number of registered users?

// total country name
[
    {
      $group:{
       _id:"$company.location.country"
      }
    }
]

// user count for each country
[
    {
      $group:{
       _id:"$company.location.country",
        userCount:{
          $sum:1
        }
      }
    }
]

//sort the countries in descending order of users count
[
    {
      $group:{
       _id:"$company.location.country",
        userCount:{
          $sum:1
        }
      }
    },
    {
      $sort:{
        userCount:-1
      }
    }
]

// top two countries having user count

[
    {
      $group:{
       _id:"$company.location.country",
        userCount:{
          $sum:1
        }
      }
    },
    {
      $sort:{
        userCount:-1
      }
    },
    {$limit:2}
]




