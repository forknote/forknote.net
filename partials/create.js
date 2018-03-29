'use strict';


angular.module('create-coin').controller("CreateCtrl", ['$scope', '$http', '$filter', '$timeout', function($scope, $http, $filter, $timeout, $document) {

    $scope.coin = {};
    $scope.coin.core = {};

    $scope.base_coin = 'bytecoin-v2';
    $scope.coin.core.ADDRESSES = [];
    $scope.coin.core.SEED_NODES = [];
    $scope.MONEY_SUPPLY = new JSBigInt(2).pow(64).subtract(1);
    $scope.coin.core.EMISSION_SPEED_FACTOR = 18;
    $scope.coin.core.DIFFICULTY_TARGET = 120;
    $scope.coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT = 12;
    var str_supply = $scope.MONEY_SUPPLY.toString();
    $scope.coin.core.MONEY_SUPPLY = str_supply;
    $scope.coinAmountHumanReadable = str_supply.substring(0, str_supply.length - $scope.coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT) + " coins";
    $scope.PREMINED_PERCENT = 0;
    $scope.coin.core.GENESIS_BLOCK_REWARD = '0';
    var str_premine = $scope.coin.core.GENESIS_BLOCK_REWARD;
    $scope.coinPremineHumanReadable = str_premine.substring(0, str_premine.length - $scope.coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT) + " coins";
    $scope.coin.core.DEFAULT_DUST_THRESHOLD = 1000000;
    $scope.coin.core.MINIMUM_FEE = 1000000;
    $scope.coin.core.CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW = 10;
    $scope.coin.core.CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE = 100000;
    $scope.coin.core.MAX_TRANSACTION_SIZE_LIMIT = 100000;
    $scope.coin.core.CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX = 86;
    $scope.coin.core.DIFFICULTY_CUT_V1 = 60;
    $scope.coin.core.DIFFICULTY_CUT_V2 = 60;
    $scope.coin.core.DIFFICULTY_CUT = 0;
    $scope.coin.core.DIFFICULTY_LAG_V1 = 15;
    $scope.coin.core.DIFFICULTY_LAG_V2 = 15;
    $scope.coin.core.DIFFICULTY_LAG = 0;
    $scope.coin.core.DIFFICULTY_WINDOW_V1 = 720;
    $scope.coin.core.DIFFICULTY_WINDOW_V2 = 720;
    $scope.coin.core.DIFFICULTY_WINDOW = 17;
    $scope.coin.core.ZAWY_DIFFICULTY_BLOCK_INDEX = 30; // Zawy diff kicks in this block

    $scope.address_prefix = 'F';
    $scope.ports_range_min = 1024;
    $scope.ports_range_max = 49151;

    $scope.EmissionSpeedFactorOptions = {
        min: 1,
        max: 30,
        step: 1,
    };

    var timeout2;
      $scope.$watch('coin.core.EMISSION_SPEED_FACTOR', function() {
        if (timeout2) {
        $timeout.cancel(timeout2);
      }
      timeout2 = $timeout($scope.emmissionChange, 0);
    });

    $scope.difficultyTargetOptions = {
        min: 10,
        max: 600,
        step: 10,
    };

    $scope.difficultyTargetFormater = function(value) {
        return value + " seconds";
    }

    var timeout3;
      $scope.$watch('coin.core.DIFFICULTY_TARGET', function() {
        if (timeout3) {
        $timeout.cancel(timeout3);
      }
      timeout3 = $timeout($scope.emmissionChange, 0);
    });

    var timeout4;
      $scope.$watch('MONEY_SUPPLY', function() {
        if (timeout4) {
        $timeout.cancel(timeout4);
      }
      timeout4 = $timeout($scope.emmissionChange, 0);
    });
    var timeout5;
      $scope.$watch('PREMINED_PERCENT', function() {
        if (timeout5) {
        $timeout.cancel(timeout5);
      }
      timeout5 = $timeout($scope.emmissionChange, 0);
    });
    var timeout6;
      $scope.$watch('coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT', function() {
        if (timeout6) {
        $timeout.cancel(timeout6);
      }
      timeout6 = $timeout($scope.emmissionChange, 0);
    });
    // End sliders

    var chart1 = {};
    chart1.type = "LineChart";
    chart1.displayed = false;
    chart1.data = {"cols": [
        {id: "day", label: "", type: "number"},
        {id: "your-coin-id", label: "", type: "number"}
    ], "rows": [
       {c: [
            {v: "0", f: "Day 0"},
            {v: 0}
        ]},
        {c: [
            {v: "100", f: "Day 100"},
            {v: 0}
        ]},
        {c: [
            {v: "200", f: "Day 200"},
            {v: 0}
        ]},
        {c: [
            {v: "300", f: "Day 300"},
            {v: 0}

        ]},
        {c: [
            {v: "400", f: "Day 400"},
            {v: 0}

        ]},
        {c: [
            {v: "500", f: "Day 500"},
            {v: 0}

        ]},
        {c: [
            {v: "600", f: "Day 600"},
            {v: 0}

        ]},
        {c: [
            {v: "700", f: "Day 700"},
            {v: 0}

        ]},
        {c: [
            {v: "800", f: "Day 800"},
            {v: 0}

        ]},
        {c: [
            {v: "900", f: "Day 900"},
            {v: 0}

        ]},
        {c: [
            {v: "1000", f: "Day 1000"},
            {v: 0}

        ]}
    ]};

    chart1.options = {
        "title": "Emission",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "legend": {position: 'none'},
        "vAxis": {
            "title": "Emission %", "gridlines": {"count": 7}, "viewWindow": {min:0, max:100}
        },
        "hAxis": {
            "title": "Day"
        },
        "chartArea": {top:30, left:40, height:'74%', width:'100%'},
        height: 250,
        width: 390,
        seriesType: "line",
        series: {
            0: { color: '#e2431e' },
        }
    };

    var chart2 = {};
    chart2.type = "LineChart";
    chart2.displayed = false;
    chart2.data = {"cols": [
        {id: "day", label: "", type: "number"},
        {id: "your-coin-id", label: "", type: "number"}
    ], "rows": [
       {c: [
            {v: "0", f: "Day 0"},
            {v: 0}
        ]},
        {c: [
            {v: "100", f: "Day 100"},
            {v: 0}
        ]},
        {c: [
            {v: "200", f: "Day 200"},
            {v: 0}
        ]},
        {c: [
            {v: "300", f: "Day 300"},
            {v: 0}

        ]},
        {c: [
            {v: "400", f: "Day 400"},
            {v: 0}

        ]},
        {c: [
            {v: "500", f: "Day 500"},
            {v: 0}

        ]},
        {c: [
            {v: "600", f: "Day 600"},
            {v: 0}

        ]},
        {c: [
            {v: "700", f: "Day 700"},
            {v: 0}

        ]},
        {c: [
            {v: "800", f: "Day 800"},
            {v: 0}

        ]},
        {c: [
            {v: "900", f: "Day 900"},
            {v: 0}

        ]},
        {c: [
            {v: "1000", f: "Day 1000"},
            {v: 0}

        ]}
    ]};

    chart2.options = {
        "title": "Coins per block",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "legend": {position: 'none'},
        "vAxis": {
            "title": "Coins", "gridlines": {"count": 7}, "viewWindow": {min:0}
        },
        "hAxis": {
            "title": "Day"
        },
        "chartArea": {top:30, left:50, height:'72%', width:'100%'},
        height: 250,
        width: 390,
        seriesType: "line",
        series: {
            0: { color: '#e2431e' },
        }
    };


    $scope.emission_chart = chart1;
    $scope.coins_per_block_chart = chart2;

// Graphic refresher
    $scope.emmissionChange = function () {
            var difficultyTarget = +$scope.coin.core.DIFFICULTY_TARGET;
            var moneySupply = +$scope.coin.core.MONEY_SUPPLY;
            var emissionSpeedFactor = +$scope.coin.core.EMISSION_SPEED_FACTOR;
            var preminePercent = +$scope.PREMINED_PERCENT;
            var cryptonoteDisplayDecimalPoint = +$scope.coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT;
            if (isNaN(emissionSpeedFactor)) {
                emissionSpeedFactor = 0;
            }

            if (isNaN(difficultyTarget)) {
                difficultyTarget = 0;
            }

            if (isNaN(moneySupply)) {
                moneySupply = 0;
            }
            if (isNaN(preminePercent)) {
                preminePercent = 0;
            }
            if (isNaN(cryptonoteDisplayDecimalPoint)) {
                cryptonoteDisplayDecimalPoint = 0;
            }
            var preminedAmount = moneySupply * preminePercent / 100;
            if (preminePercent != 0) {
                $scope.coin.extensions.push("genesis-block-reward.json");
                $scope.coin.extensions = $filter('unique')($scope.coin.extensions);
            }
            var days = 1100, // 3 years
                k = 1 / Math.pow(2, emissionSpeedFactor);

            var i = 0
            for (var d = 0; d < days; d += 100) {
                var val = preminedAmount + (moneySupply - preminedAmount) * ((k - 1) * Math.pow((1 - k), (d * 86400 / difficultyTarget)) + 1);

                var day0 = (moneySupply - preminedAmount) * ((k - 1) * Math.pow((1 - k), (d * 86400 / difficultyTarget)) + 1);
                var day1 = (moneySupply - preminedAmount) * ((k - 1) * Math.pow((1 - k), ((d + 1) * 86400 / difficultyTarget)) + 1);
                var val2 = (day1 - day0) * difficultyTarget / (86400 * Math.pow(10, cryptonoteDisplayDecimalPoint));

                $scope.emission_chart.data.rows[i].c[1] = {v: val * 100 / moneySupply, f: (val * 100 / moneySupply).toFixed(5) + "%"};
                $scope.coins_per_block_chart.data.rows[i].c[1] = {v: val2, f: val2.toFixed(5) + " coins"};
                i++;
            }
    }

// Core changed
    $scope.coreChanged = function () {
        if ($scope.base_coin == "bytecoin-v2") {
            $scope.coin.extensions = [ "core/bytecoin.json", "print-genesis-tx.json", "versionized-parameters.json", "zawy-difficulty-algorithm.json" ];
            $scope.coin.base_coin = "bytecoin-v2";
        }
    }


// Addresses
    $scope.addToAddresses = function () {
        var newAddress = $scope.newAddress;
        if (newAddress !== undefined)
            $scope.coin.core.ADDRESSES.push(newAddress);
    };

    $scope.removeAddress = function(index) {
        $scope.coin.core.ADDRESSES.splice(index, 1);
    };

// Seed nodes
    $scope.addToSeedNodes = function () {
        var newSeedNode = '';
        if ($scope.newSeedNode.indexOf(":") > -1) {
            newSeedNode = $scope.newSeedNode;
        } else {
            newSeedNode = $scope.newSeedNode + ":" + $scope.coin.core.P2P_DEFAULT_PORT;
        }

        if ($scope.coin.core.SEED_NODES.indexOf(newSeedNode) == -1) {
            $scope.coin.core.SEED_NODES.push(newSeedNode);
        }
    };

    $scope.removeSeedNode = function(item) {
        $scope.coin.core.SEED_NODES.splice($scope.coin.core.SEED_NODES.indexOf(item), 1);
    };

// Difficulty target changed
    $scope.difficultyTargetChanged = function () {
        setDifficultyWindow();
        setMinedMoneyUnlockWindow();
    }

// Money supply changed
    $scope.moneySupplyChanged = function () {
        //bigint
        var str = $scope.MONEY_SUPPLY.toString();
        $scope.supplyParameterChanged();

        $scope.coin.core.MINIMUM_FEE = Math.pow(10, (str.length - 14));
        $scope.coin.core.DEFAULT_DUST_THRESHOLD = Math.pow(10, (str.length - 14));
        if ($scope.coin.core.MINIMUM_FEE < 1) {
            $scope.coin.core.MINIMUM_FEE = 1;
            $scope.coin.core.DEFAULT_DUST_THRESHOLD = 0;
        }
    }

    $scope.supplyParameterChanged = function () {
        //bigint
        var str = $scope.MONEY_SUPPLY.toString();
        $scope.coin.core.MONEY_SUPPLY = str;
        $scope.coinAmountHumanReadable = str.substring(0, str.length - $scope.coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT);

        if ($scope.PREMINED_PERCENT == 100) {
            $scope.coin.core.GENESIS_BLOCK_REWARD = $scope.MONEY_SUPPLY.toString();
        } else {
            $scope.coin.core.GENESIS_BLOCK_REWARD = ( parseInt($scope.MONEY_SUPPLY * $scope.PREMINED_PERCENT / 100) ).toString();
        }
        $scope.coinPremineHumanReadable = $scope.coin.core.GENESIS_BLOCK_REWARD.substring(0, $scope.coin.core.GENESIS_BLOCK_REWARD.length - $scope.coin.core.CRYPTONOTE_DISPLAY_DECIMAL_POINT);
    }

// Populate CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX
    $scope.addressPrefixChanged = function () {
        cnUtil.configChanged($scope.coin);
        var addresses = [];
        for (var i = 0; i < 8; i++) {
            addresses[i] = cnUtil.create_addr_prefix(cnUtil.rand_16());
        }

        var j = 0;

        for (var i = 0; i < 8; i++) {
            if (i < 7 && addresses[i][j] != addresses[i+1][j]) {
                break;
            }

            if (i === 7) {
                j++;
                i = -1;
            }

        }

        $scope.address_prefix = addresses[0].substring(0,j);
    }

// Generate genesis tx
// TODO: DO IT
/*
    $scope.genesis_tx = function () {
        cnUtil.configChanged($scope.coin);

        var emission_speed_factor_shift = new JSBigInt(2).pow($scope.coin.core.EMISSION_SPEED_FACTOR);

        var base_reward =  $scope.MONEY_SUPPLY.divide(emission_speed_factor_shift);
    }
*/

// Cryptonote_name changed
    $scope.cryptonoteNameChanged = function () {
        $scope.coin.core.DAEMON_NAME = $scope.coin.core.CRYPTONOTE_NAME + "d";
    }

// Set mined money unlock window
    function setDifficultyWindow() {
        $scope.coin.core.DIFFICULTY_WINDOW_V1 = Math.ceil(24 * 60 * 60 / $scope.coin.core.DIFFICULTY_TARGET);
        $scope.coin.core.DIFFICULTY_WINDOW_V2 = Math.ceil(24 * 60 * 60 / $scope.coin.core.DIFFICULTY_TARGET);
        return 0;
    }

// Set mined money unlock window
    function setMinedMoneyUnlockWindow() {
        $scope.coin.core.CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW = Math.ceil(1200 / $scope.coin.core.DIFFICULTY_TARGET);
        return 0;
    }

// Randomize ports
    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    $scope.randomizePorts = function () {
        $scope.coin.core.P2P_DEFAULT_PORT = randomIntFromInterval($scope.ports_range_min, $scope.ports_range_max);
        $scope.P2PDefaultPortChanged();
    }

    $scope.P2PDefaultPortChanged = function (){
        $scope.coin.core.RPC_DEFAULT_PORT = $scope.coin.core.P2P_DEFAULT_PORT + 1;
    }

    $scope.networkIdentifierJson = {
    }

    $scope.networkIdentifierConfig = {

    }

// Randomize network identifier
    $scope.randomizeNetworkIdentifier = function () {
        var network_identifier = '';
        var deamon_network_identifier = '';
        for(var i = 0; i < 16; i++) {
            var random_hex = ("0" + Math.floor(Math.random()*256).toString(16)).substr(-2);
            network_identifier = network_identifier + '0x' + random_hex;
            deamon_network_identifier = deamon_network_identifier + random_hex;
            if (i == 3 || i == 5 || i == 7 || i == 9)
                deamon_network_identifier = deamon_network_identifier + '-';
            if (i != 15)
                network_identifier += ', ';
        }
        $scope.deamon_network_identifier = deamon_network_identifier;
        $scope.coin.core.BYTECOIN_NETWORK = deamon_network_identifier;
    }

// Modals
    $scope.show_config_modal = function () {
        $scope.$broadcast('show-errors-check-validity');
        if ($scope.coinForm.$valid) {
            var addressPrefix = $scope.coin.core.CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX;
            if ($scope.coin.core.ADDRESSES[0] !== undefined && $scope.coin.core.ADDRESSES[0] !== null && $scope.coin.core.ADDRESSES[0][0] == 'D')
                addressPrefix = 72;

            var dataObj = {
                    MoneySupply : $scope.coin.core.MONEY_SUPPLY,
                    EmissionSpeedFactor : $scope.coin.core.EMISSION_SPEED_FACTOR,
                    DifficultyTarget : $scope.coin.core.DIFFICULTY_TARGET,
                    GenesisBlockReward : $scope.coin.core.GENESIS_BLOCK_REWARD,
                    AddressPrefix : addressPrefix,
                    Addresses : $scope.coin.core.ADDRESSES
            };
            var res = $http.post('http://api.forknote.net:8090/genesis_tx/', dataObj);
            res.success(function(data, status, headers, config) {
                $scope.coin.core.GENESIS_COINBASE_TX_HEX = data;
                setTimeout(function(){$('#coin_daemon_config_modal').modal('show')}, 100);
                $scope.create_daemon_config();
            });
            res.error(function(data, status, headers, config) {
                $scope.coin.core.GENESIS_COINBASE_TX_HEX = "invalid address";
            });
        }
    }

    $scope.show_json_modal = function () {
        $scope.coin_json = (JSON.parse(JSON.stringify($scope.coin)));
        delete $scope.coin_json.core.ADDRESSES;
        $scope.coin_json.core.CHECKPOINTS = "";
        $scope.coin_json.core.MAX_BLOCK_SIZE_INITIAL = $scope.coin.core['CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE'];
        $scope.coin_json_stringified = JSON.stringify($scope.coin_json, null, 4);
        $scope.$broadcast('show-errors-check-validity');
        if ($scope.coinForm.$valid) {
            setTimeout(function(){$('#coin_daemon_json_modal').modal('show')}, 100);
        }
    }

// Randomize
    $scope.randomize = function () {
        $scope.randomizePorts();
        $scope.randomizeNetworkIdentifier();
        $scope.coreChanged();
        $scope.show_config_modal();
    }

// Create config (daemon)
    $scope.create_daemon_config = function () {
        $scope.coin_daemon_config = "";
        for(var prop in $scope.coin.core) {
            if($scope.coin.core.hasOwnProperty(prop)) {
                if (prop === "SEED_NODES") {
                    for(var seed in $scope.coin.core[prop]) {
                        $scope.coin_daemon_config += "seed-node=" + $scope.coin.core[prop][seed] + "\n";
                    }
                } else if (prop == "P2P_DEFAULT_PORT") {
                    $scope.coin_daemon_config += "p2p-bind-port=" + $scope.coin.core[prop] + "\n";
                } else if (prop == "RPC_DEFAULT_PORT") {
                    $scope.coin_daemon_config += "rpc-bind-port=" + $scope.coin.core[prop] + "\n";
                } else if (prop == "BYTECOIN_NETWORK") {
                    $scope.coin_daemon_config += prop + "=" + $scope.deamon_network_identifier + "\n";
                } else if (prop == "GENESIS_COINBASE_TX_HEX") {
                    $scope.coin_daemon_config += "GENESIS_COINBASE_TX_HEX=" + $scope.coin.core[prop] + "\n";
                } else if (prop == "GENESIS_BLOCK_REWARD") {
                    $scope.coin_daemon_config += "GENESIS_BLOCK_REWARD=" + $scope.coin.core[prop] + "\n";
                    if ($scope.coin.core[prop] > 0)
                        $scope.coin_daemon_config += "SYNC_FROM_ZERO=1\n";
                } else if (prop == "DAEMON_NAME") {
                    // daemon_name is not needed
                } else if (prop == "ADDRESSES") {
                    // addresses is not needed
                } else  {
                    $scope.coin_daemon_config += prop + "=" + $scope.coin.core[prop] + "\n";
                }
            }
        }
        $scope.coin_daemon_config += "MAX_BLOCK_SIZE_INITIAL=" + $scope.coin.core['CRYPTONOTE_BLOCK_GRANTED_FULL_REWARD_ZONE'] + "\n";
        $scope.coin_daemon_config += "UPGRADE_HEIGHT_V2=1" + "\n";
        $scope.coin_daemon_config += "UPGRADE_HEIGHT_V3=30" + "\n";
        if(!$scope.coin.core['SEED_NODES'].length) {
            $scope.coin_daemon_config += "seed-node=127.0.0.1:" + $scope.coin.core['P2P_DEFAULT_PORT'];
        }
    }



    $scope.chartReady = function () {
        fixGoogleChartsBarsBootstrap();
    }

    function fixGoogleChartsBarsBootstrap() {
        // Google charts uses <img height="12px">, which is incompatible with Twitter
        // * bootstrap in responsive mode, which inserts a css rule for: img { height: auto; }.
        // *
        // * The fix is to use inline style width attributes, ie <img style="height: 12px;">.
        // * BUT we can't change the way Google Charts renders its bars. Nor can we change
        // * the Twitter bootstrap CSS and remain future proof.
        // *
        // * Instead, this function can be called after a Google charts render to "fix" the
        // * issue by setting the style attributes dynamically.

        $(".google-visualization-table-table img[width]").each(function (index, img) {
            $(img).css("width", $(img).attr("width")).css("height", $(img).attr("height"));
        });
    };

    $scope.init = function () {
        $scope.randomizePorts();
        $scope.randomizeNetworkIdentifier();
        $scope.coreChanged();
        $scope.supplyParameterChanged();
    }

    $timeout($scope.init);
}]);
