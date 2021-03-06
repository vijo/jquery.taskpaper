describe('taskpaper serializer : ', {
  
  before_all: function() {
    $('<ul id="todoSimple">').appendTo('#main')
		$('#todoSimple').taskpaper({ url: 'data/simple.taskpaper'	})
    
    $('<ul id="todoComplex">').appendTo('#main')
    $('#todoComplex').taskpaper({ url: 'data/sample.taskpaper' })
	},
	
	after_all: function(){
    $('#main').empty()
	},

  'should be able to serialise a flat structure' : function() {  
    value_of($('#todoSimple').serialize()).should_be('Personal:\n  - @email Fred McDowell re: lunch @due(2008-12-22)');
  },
  
  // 'should be able to serialise nested structure' : function() {
  //    // var str = "Personal:\n\t- @email Sam McDowell re: lunch @due(2008-12-22)\nBusiness:\n\tFinance:\n\t\t- review credit card for online services @online\n\t\tCheck all recent stuff\n\t\t- GST return @due(2009-01-15)\n\tInvoices:\n\t\t- prepare Gen-i invoice for December @today @done(2008-12-21)\n\t\t- prepare langdalehomes.com invoice\n\t\t- prepare Mother's Instinct Invoice @today @done(2008-12-21)\n\tGen-i:\n\t\t- speak to Steve re: contract @due(2008-12-24)\n\t\t- SumOp training @due(2008-12-09)\n\t\tAsset Management Solution:\n\t\t\t- email Mark@Altiris re: next steps @email\n\t\tCollate Final Data:\n\t\t\t- review received data and combine @mac @time(10m)\n\t\tSun Infrastructure:\n\t\t\t- Network Design\n\t\t\t- email response re: 100Mb network to Union Street @email\n\t\t\t- draft email with high-level security requirements @email\n\t\tMigrate Wiki:\n\t\t\t- email users to notify of status @email\n\t\t\t- add users to Wiki @online\n\t\t\t- migrate photos @online\n\t\t\t- migrate attachments @online\n\t\t\t- create top-level structure @online\n\t\t\t- migrate page content @online\n\t\tNAIT Database Selection:\n\t\t\t- call Andrew Leckie re: work required to build @phone @due(2008-12-23)"
  //    var str = "Personal:\n  - @email Sam McDowell re: lunch @due(2008-12-22)\nBusiness:\n  Finance:\n    - review credit card for online services @online\n    Check all recent stuff\n    - GST return @due(2009-01-15)\n  Invoices:\n    - prepare Gen-i invoice for December @today @done(2008-12-21)\n    - prepare langdalehomes.com invoice\n    - prepare Mother's Instinct Invoice @today @done(2008-12-21)\n  Gen-i:\n    - speak to Steve re: contract @due(2008-12-24)\n    - SumOp training @due(2008-12-09)\n    Asset Management Solution:\n      - email Mark@Altiris re: next steps @email\n    Collate Final Data:\n      - review received data and combine @mac @time(10m)\n    Sun Infrastructure:\n      - Network Design\n      - email response re: 100Mb network to Union Street @email\n      - draft email with high-level security requirements @email\n    Migrate Wiki:\n      - email users to notify of status @email\n      - add users to Wiki @online\n      - migrate photos @online\n      - migrate attachments @online\n      - create top-level structure @online\n      - migrate page content @online\n    NAIT Database Selection:\n      - call Andrew Leckie re: work required to build @phone @due(2008-12-23)"
  //    value_of($('#todoComplex').serialize()).should_be(str);
  //  },
    
});