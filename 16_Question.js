// books data are their .................. 
//************* */
[
    {
      $lookup:{
        from:"authors",
        localField:"author_id",
        foreignField:"_id",
        as:"author_details"
      }
    }
]

//......................

[
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_details",
      },
    },
    {
      $addFields:{
        author_details:{
          $first:"$author_details"
        }
      }
    }
]

// another way.............

[
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_details",
      },
    },
    {
      $addFields:{
        author_details:{
          $arrayElemAt:["$author_details",0]
        }
      }
    }
]

