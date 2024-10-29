// 3. List the top 5 most common favorite fruits among the users

  //3.1 group list of fruits
  [
    {
      $group: {
        _id: "$favoriteFruit",
      },
    },
  ]

  //3.2 count the fruits of each group
  [
    {
      $group: {
        _id: "$favoriteFruit",
        count:{
          $sum:1 // here 1 means count and add 1 (i.e count++) 
        },
      },
    },
  ]

  //3.3 sort the group in descending order
  [
    {
      $group: {
        _id: "$favoriteFruit",
        count:{
          $sum:1
        }
      },
    },
    {
      $sort:{
        count:-1 // actually count is not present in original db but its actually pipeline of above data
      }
    }
  ]

  //3.4 actually it select the top 2 groups of data
  [
    {
      $group: {
        _id: "$favoriteFruit",
        count:{
          $sum:1
        }
      },
    },
    {
      $sort:{
        count:-1
      }
    },
    {
      $limit:2
    }
  ]


