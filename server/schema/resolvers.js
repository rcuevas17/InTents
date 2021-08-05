const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express'); 

const resolvers = {
  Query: {
    me: async (parent,args,context) => {
        if (context.user){
            let id = context.user._id
            const userData = await User.findOne({_id:id})
            return userData
        }
        throw new AuthenticationError("USER SIGN IN ERROR")
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {token,user};
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({email:email});
      if (!user) {
        throw new AuthenticationError("USER SIGN IN ERROR");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("USER SIGN IN ERROR");
      }
      const token = signToken(user);
      return {token,user};
    },

    saveBook: async (parent, {bookData}, context) => {
        if (context.user){
            let id = context.user._id
            const updatedUser = await User.findOneAndUpdate(
                { _id:id },
                { $addToSet: { savedBooks: bookData } },
                { new: true, runValidators: true }
              );
              return updatedUser;
        }
        throw new AuthenticationError("BOOK SAVE ERROR")
      }, 
      
      removeBook: async (parent, {bookId}, context) => {
        if (context.user){
            let id = context.user._id
            const updatedUser = await User.findOneAndUpdate(
                { _id:id },
                { $pull: { savedBooks: bookId } },
                { new: true, runValidators: true }
              );
              return updatedUser;
        }
        throw new AuthenticationError("BOOK DELETE ERROR")
      },
  },
};

module.exports = resolvers;
