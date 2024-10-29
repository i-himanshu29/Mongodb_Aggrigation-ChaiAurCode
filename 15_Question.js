// List all companies located in the USA with their corresponding user count

//find companies in usa
[
    {
        $match:{
            "company.location.country":"USA"
        }
    }
]

//.........................

[
    {
      $match: {
        "company.location.country":"USA"
      },
    },
    {
      $group:{
        _id:"$company.title",
        userCount:{$sum:1}
      }
    }
]