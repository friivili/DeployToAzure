
const winnerlist = function(req, res){
    res.render('finland',{
        winners:
        [
            {year:'1992', rank: '7th'},
            {year:'1994', rank: '3rd'},
            {year:'1998', rank: '3rd'},
            {year:'2002', rank: '6th'},
            {year:'2006', rank: '2nd'},
            {year:'2010', rank: '3rd'},
            {year:'2014', rank: '3rd'}
        ]});
};

module.exports = {
    winnerlist
};