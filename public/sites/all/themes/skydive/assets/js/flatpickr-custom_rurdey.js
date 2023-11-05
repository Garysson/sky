jQuery(document).ready(function () {
  var enableDates = [{

  }];
  console.log(jQuery(".datepicker").length);
  if (jQuery(".datepicker").length > 0) {
    jQuery(".datepicker").flatpickr({
      dateFormat: "Y-m-d",
      /*disable: [
        {
          from: "2019-04-01",
          to: "2030-05-01"
        },
      ],*/
      minDate: "today",
      //maxDate: new Date().fp_incr()
    });
  }
});