import React from 'react';


// global application context object to maintain favorites and watch list and store in localstorage
const AppContext = React.createContext({
  favorites_list: JSON.parse(localStorage.getItem("favorites_list") ||'{}'),  
  favorites_list_set: function (item, forceRemove) {
    if (this.favorites_list[item.id] || forceRemove) {
      delete this.favorites_list[item.id]      
      this.save();
      return false;
    }
    this.favorites_list[item.id] = { id: item.id, title: item.title, poster_path: item.poster_path }
    this.save();    
    return true;
  },
  watch_list: JSON.parse(localStorage.getItem("watch_list") ||'{}'),
  watch_list_set: function (item, forceRemove) {
    if (this.watch_list[item.id] || forceRemove) {
      delete this.watch_list[item.id]      
      this.save();
      return false;
    }
    this.watch_list[item.id] = { id: item.id, title: item.title, poster_path: item.poster_path }
    this.save();    
    return true;
  },

  save:function(){
    localStorage.setItem('favorites_list',JSON.stringify(this.favorites_list))
    localStorage.setItem('watch_list',JSON.stringify(this.watch_list))
  },

});
export default AppContext;