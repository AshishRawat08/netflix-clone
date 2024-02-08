const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyliked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyliked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie already added to liked list" });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie added successfully" });
  } catch (error) {
    return res.json({
      msg: "error adding movie",
    });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      res.json({ msg: "success", movies: user.likedMovies });
    } else {
      res.json({ msg: "user with given email not found" });
    }
  } catch (error) {
    return res.json({
      msg: "error fetching liked movie",
    });
  }
};

// module.exports.removeFromLikedMovies = async (req, res) => {
//   try {
//     const { email, movieId } = req.body;
//     const user = await User.findOne({ email });
//     if (user) {
//       const { likedMovies } = user;
//       const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
//       if (!movieIndex) res.status(400).send({ msg: "movie not found" });
//       likedMovies.splice(movieIndex, 1);

//       await User.findByIdAndUpdate(
//         user._id,
//         {
//           likedMovies,
//         },
//         { new: true }
//       );
//       return res.json({ msg: "movie deleted from list", movies: likedMovies });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.json({
//       msg: "error deleting liked movie",
//     });
//   }
// };

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
      if (movieIndex === -1) {
        return res.status(400).json({ msg: "Movie not found in liked list" });
      }
      likedMovies.splice(movieIndex, 1);

      // Update the user's likedMovies array in the database
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies,
        },
        { new: true }
      );

      // Send response indicating successful deletion
      return res.json({ msg: "Movie deleted from liked list", movies: likedMovies });
    } else {
      // Send response if user is not found
      return res.status(400).json({ msg: "User not found" });
    }
  } catch (error) {
    console.log(error);
    // Send response for any other errors that occur during the process
    return res.status(500).json({
      msg: "Error deleting liked movie",
    });
  }
};
