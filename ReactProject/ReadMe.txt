{/*  */}  -> commenti

#Bottom Navigation
npm install @react-navigation/bottom-tabs
npm install @react-navigation/native-stack

#api
https://developers.themoviedb.org/3/movies/get-movie-details -> movie api

come utilizzarlo :
registrarsi su : https://www.themoviedb.org
andare su profilo/impostazioni/Api -> prendere Api Key

#search bar
npm i react-native-paper

#async storage
npm install @react-native-async-storage/async-storage

#reanimated
npm i react-native-reanimated

copio ed incollo su babel.config.js
module.exports = function (api) { 
api.cache(true);
 return {
   presets: ['babel-preset-expo'], 
   plugins: ['react-native-reanimated/plugin'], 
 };
};
