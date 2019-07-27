const fbData =
    [{
        amount: 35.4808,
        year: 2012,

    },
    {
        amount: 68.7622,
        year: 2013,
    },
    {
        amount: 88.7719,
        year: 2014,
    },
    {
        amount: 117.0351,
        year: 2015,
    },
    {
        amount: 156.5762,
        year: 2016,
    },
    {
        amount: 156.5762,
        year: 2017,
    },
    {
        amount: 171.5109,
        year: 2018,
    },
    {
        amount: 172.9106,
        year: 2019,
    },
]

const teslaData =
    [{
        amount: 31.1687	,
        year: 2012,

    },
    {
        amount: 104.4014	,
        year: 2013,
    },
    {
        amount: 223.3291,
        year: 2014,
    },
    {
        amount: 230.0427,
        year: 2015,
    },
    {
        amount: 209.7673,
        year: 2016,
    },
    {
        amount: 314.3163,
        year: 2017,
    },
    {
        amount: 317.3099,
        year: 2018,
    },
    {
        amount: 264.5014,
        year: 2019,
    },
]

function onSubmit() {
    let inputit=  document.getElementById("pages-inputit").value;
    let investmenttesla = parseInt(inputit);
    if (isNaN(investmenttesla)) {
        alert('Please change to number');
        return;
    }
    if ( inputit <= 0) {
        alert('No negative value');
        return;
    }
    let inputrt=  document.getElementById("pages-inputir").value;
    let returnoftesla = parseInt(inputrt);
    if (isNaN(returnoftesla)) {
        alert('Please change to number');
        return;
    }
    if ( inputrt <= 0) {
        alert('No negative value');
        return;
    }
    let inputat=  document.getElementById("pages-inputat").value;
    let amounttesla = parseInt(inputat);
    if (isNaN(amounttesla)) {
        alert('Please change to number');
        return;
    }
    if ( inputat <= 0) {
        alert('No negative value');
        return;
    }

    let returnamount = calculateReturnAmount (inputit, inputrt, inputat);
    // document.getElementById('pages-output').innerHTML =
}

function calculateReturnAmountForFb(inputit, inputrt, inputat) {
    const it = fbData.filter(fb => fb.year = inputit);
    alert(it);
}

function calculatereturn(totalPage, input) {
    return totalPage/input;
}

function 
