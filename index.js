/// TODO: make direct fetch on the server and provide
/// data via private API for security
/// TODO: make accessing interface by iterating on
/// already predefined set of available items

// get interface elements 
const symbol_1 = document.getElementById('sym_1');
const open_1 = document.getElementById('open_1');
const high_1 = document.getElementById('high_1');
const low_1 = document.getElementById('low_1');
const current_pr_1 = document.getElementById('curr_1');
const change_1d_1 = document.getElementById('chd_1');
const change_perc_1 = document.getElementById('chp_1');


const symbol_2 = document.getElementById('sym_2');
const open_2 = document.getElementById('open_2');
const high_2 = document.getElementById('high_2');
const low_2 = document.getElementById('low_2');
const current_pr_2 = document.getElementById('curr_2');
const change_1d_2 = document.getElementById('chd_2');
const change_perc_2 = document.getElementById('chp_2');

const symbol_3 = document.getElementById('sym_3');
const open_3 = document.getElementById('open_3');
const high_3 = document.getElementById('high_3');
const low_3 = document.getElementById('low_3');
const current_pr_3 = document.getElementById('curr_3');
const change_1d_3 = document.getElementById('chd_3');
const change_perc_3 = document.getElementById('chp_3');

const symbol_4 = document.getElementById('sym_4');
const open_4 = document.getElementById('open_4');
const high_4 = document.getElementById('high_4');
const low_4 = document.getElementById('low_4');
const current_pr_4 = document.getElementById('curr_4');
const change_1d_4 = document.getElementById('chd_4');
const change_perc_4 = document.getElementById('chp_4');

const fsymbol_1 = document.getElementById('fsym_1');
const fopen_1 = document.getElementById('fopen_1');
const fhigh_1 = document.getElementById('fhigh_1');
const flow_1 = document.getElementById('flow_1');
const fcurrent_pr_1 = document.getElementById('fcurr_1');
const fchange_1d_1 = document.getElementById('fchd_1');
const fchange_perc_1 = document.getElementById('fchp_1');


const fsymbol_2 = document.getElementById('fsym_2');
const fopen_2 = document.getElementById('fopen_2');
const fhigh_2 = document.getElementById('fhigh_2');
const flow_2 = document.getElementById('flow_2');
const fcurrent_pr_2 = document.getElementById('fcurr_2');
const fchange_1d_2 = document.getElementById('fchd_2');
const fchange_perc_2 = document.getElementById('fchp_2');

const fsymbol_3 = document.getElementById('fsym_3');
const fopen_3 = document.getElementById('fopen_3');
const fhigh_3 = document.getElementById('fhigh_3');
const flow_3 = document.getElementById('flow_3');
const fcurrent_pr_3 = document.getElementById('fcurr_3');
const fchange_1d_3 = document.getElementById('fchd_3');
const fchange_perc_3 = document.getElementById('fchp_3');

const fsymbol_4 = document.getElementById('fsym_4');
const fopen_4 = document.getElementById('fopen_4');
const fhigh_4 = document.getElementById('fhigh_4');
const flow_4 = document.getElementById('flow_4');
const fcurrent_pr_4 = document.getElementById('fcurr_4');
const fchange_1d_4 = document.getElementById('fchd_4');
const fchange_perc_4 = document.getElementById('fchp_4');

const time = document.getElementById('time');


// start fetching API
function get_and_display(){
    fetch('https://fcsapi.com/api-v3/crypto/latest?id=78,79,80,81,82&access_key=5BNtD1J2TRtc9B3PEckLhuBC', {
        method: 'GET'   
    })
    .then(function(response) {return response.json(); })
    .then(function(json) {
        console.log(json)
        //take response param as starting point
        let data = json.response;
        console.log(data)
        display_crypto(data);
    })
    .catch(function(err){
        console.log(err);
    });
    fetch('https://fcsapi.com/api-v3/forex/latest?id=1,0,2,3,82&access_key=5BNtD1J2TRtc9B3PEckLhuBC', {
        method: 'GET'   
    })
    .then(function(response) {return response.json(); })
    .then(function(json) {
        console.log(json)
        //take response param as starting point
        let data = json.response;
        console.log(data)
        display_forex(data);
    })
    .catch(function(err){
        console.log(err);
    });
    
}
function display_crypto(tk){
    symbol_1.innerHTML = tk[0].s;
    open_1.innerHTML = tk[0].o;
    high_1.innerHTML = tk[0].h;
    low_1.innerHTML = tk[0].l;
    current_pr_1.innerHTML = tk[0].c;
    change_1d_1.innerHTML = tk[0].ch;
    change_perc_1.innerHTML = tk[0].cp;
    time.innerHTML = tk[0].tm;

    symbol_2.innerHTML = tk[1].s;
    open_2.innerHTML = tk[1].o;
    high_2.innerHTML = tk[1].h;
    low_2.innerHTML = tk[1].l;
    current_pr_2.innerHTML = tk[1].c;
    change_1d_2.innerHTML = tk[1].ch;
    change_perc_2.innerHTML = tk[1].cp;

    symbol_3.innerHTML = tk[2].s;
    open_3.innerHTML = tk[2].o;
    high_3.innerHTML = tk[2].h;
    low_3.innerHTML = tk[2].l;
    current_pr_3.innerHTML = tk[2].c;
    change_1d_3.innerHTML = tk[2].ch;
    change_perc_3.innerHTML = tk[2].cp;

    symbol_4.innerHTML = tk[3].s;
    open_4.innerHTML = tk[3].o;
    high_4.innerHTML = tk[3].h;
    low_4.innerHTML = tk[3].l;
    current_pr_4.innerHTML = tk[3].c;
    change_1d_4.innerHTML = tk[3].ch;
    change_perc_4.innerHTML = tk[3].cp;


}

function display_forex(tk){
    fsymbol_1.innerHTML = tk[0].s;
    fopen_1.innerHTML = tk[0].o;
    fhigh_1.innerHTML = tk[0].h;
    flow_1.innerHTML = tk[0].l;
    fcurrent_pr_1.innerHTML = tk[0].c;
    fchange_1d_1.innerHTML = tk[0].ch;
    fchange_perc_1.innerHTML = tk[0].cp;

    fsymbol_2.innerHTML = tk[1].s;
    fopen_2.innerHTML = tk[1].o;
    fhigh_2.innerHTML = tk[1].h;
    flow_2.innerHTML = tk[1].l;
    fcurrent_pr_2.innerHTML = tk[1].c;
    fchange_1d_2.innerHTML = tk[1].ch;
    fchange_perc_2.innerHTML = tk[1].cp;

    fsymbol_3.innerHTML = tk[2].s;
    fopen_3.innerHTML = tk[2].o;
    fhigh_3.innerHTML = tk[2].h;
    flow_3.innerHTML = tk[2].l;
    fcurrent_pr_3.innerHTML = tk[2].c;
    fchange_1d_3.innerHTML = tk[2].ch;
    fchange_perc_3.innerHTML = tk[2].cp;

    fsymbol_4.innerHTML = tk[3].s;
    fopen_4.innerHTML = tk[3].o;
    fhigh_4.innerHTML = tk[3].h;
    flow_4.innerHTML = tk[3].l;
    fcurrent_pr_4.innerHTML = tk[3].c;
    fchange_1d_4.innerHTML = tk[3].ch;
    fchange_perc_4.innerHTML = tk[3].cp;
}
get_and_display();
