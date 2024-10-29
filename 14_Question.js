// Find users who have both 'enim' and 'id' as their tags ?

[
    {
      $match: {
        tags: { $all: ["enim", "id"] },
      },
    },
  ]