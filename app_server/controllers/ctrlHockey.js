
const winnerlist = function(req, res){
    res.render('hockey',{
        winners:
        [
            {year:'1992', team:'Unified Team'},
            {year:'1994', team:'Sweden'},
            {year:'1998', team:'Czech Republic'},
            {year:'2002', team:'Canada'},
            {year:'2006', team:'Sweden'},
            {year:'2010', team:'Canada'},
            {year:'2014', team:'Canada'}
        ]});
};
module.exports = {
    winnerlist
};