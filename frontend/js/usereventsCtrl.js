angular.module('goaldApp')
  .controller('userEventsCtrl', userEventsCtrl);

userEventsCtrl.$inject = ['$http', '$state', '$stateParams'];

function userEventsCtrl($http, $state, $stateParams) {

  var self = this;
  self.all = [];

  console.log('$stateParams.user_id = ' + $stateParams.user_id)
  console.log('$stateParams.goal_id = ' + $stateParams.goal_id)
  self.user_id = $stateParams.user_id 
  self.goal_id = $stateParams.goal_id 

  self.getEvents = getEvents;
  getEvents();
  function getEvents(user_id, goal_id) {
    console.log('running getEvents from userEventsCtrl')
    console.log(self.user_id)
    console.log(self.goal_id)
    $http
      .get('http://localhost:3000/users/' + self.user_id + '/goals/' + self.goal_id + '/events')
      .then(function(response) {
        console.log(response)
        self.all = response.data
        console.log(self.all)
        getDatetimess()
    });
  }

  self.datetimes = [];

  self.getDatetimess = getDatetimess;
  function getDatetimess() {
    self.datetimes = self.all.map(function(a) {
      return new Date(a.event_datetime);
    });
    console.log('array from getDatetimes:');
    console.log(self.datetimes);
    eventDateElements();
  }

  self.hours = [];
  self.months = [];
  self.years = [];
  self.days = [];
  self.weeks = [];

  self.eventDateElements = eventDateElements
  function eventDateElements() {
    for (var i = 0; i < self.datetimes.length; i++) {
      self.theDate = self.datetimes[i];
      self.hour = self.theDate.getHours();
      self.day = self.theDate.getDay();
      self.week = moment(self.theDate).isoWeek()
      self.month = self.theDate.getMonth() + 1;  // MONTHS ARE ZERO INDEXED.  WTF?!
      self.year = self.theDate.getFullYear();
      if (self.hours.indexOf(self.hour) === -1) {
        self.hours.push(self.hour);
      }
      if (self.days.indexOf(self.day) === -1) {
        self.days.push(self.day);
      }
      if (self.weeks.indexOf(self.week) === -1) {
        self.weeks.push(self.week);
      }
      if (self.months.indexOf(self.month) === -1) {
        self.months.push(self.month);
      }
      if (self.years.indexOf(self.year) === -1) {
        self.years.push(self.year);
      }
    }
    self.hours.sort()
    self.days.sort()
    self.weeks.sort()
    self.months.sort()
    self.years.sort()
    console.log('Hours: ' + self.hours)
    console.log('Days: ' + self.days)
    console.log('Weeks: ' + self.weeks)
    console.log('Months: ' + self.months)
    console.log('Years: ' + self.years)
    minDate()
  }

  self.minDate = minDate
  function minDate() {
    self.firstDate = new Date(Math.min.apply(null, self.datetimes));
    console.log('first date: ' + self.firstDate)
    monthList();
  }

  self.yearMonth = [];
  self.monthList = monthList
  function monthList() {
    self.vDatetime = self.firstDate;    
    while (self.vDatetime <= moment()) {
      self.vYearMonth = {};
      self.vYearMonth.year = moment(self.vDatetime).year();
      self.vYearMonth.month = moment(self.vDatetime).month() + 1;  //MONTH ZERO INDEXED
      self.yearMonth.push(self.vYearMonth)
      self.vDatetime = moment(self.vDatetime).add(1, 'months');
    }
    console.log('outside of while loop - self.yearMonth:');
    console.log(self.yearMonth);
  }

  self.dateElementTotals = dateElementTotals
  function dateElementTotals() {
    console.log('this doesn\'t do anything yet')
  }

}















