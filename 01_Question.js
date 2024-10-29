// Mongodb Agregation questions 

// 1. How many users are active?

[
    {
      $match: {
        isActive: true,
      },
    },
    //count
    {
      $count: 'activeUsers'
    }
]

