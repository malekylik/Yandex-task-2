(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */

    function solution(map) {
        function createMassForCheck(map) {
            var forCheck = [];
            for(var i = 0; i < map.length; i++) {
                forCheck.push([]);
                for (var j = 0; j < map[i].length; j++){
                    forCheck[i][j] = null;
                }
            }

            return forCheck;
        }

        function rec(i,j,map,check,count) {
            check[i][j] = count;

            if(i + 1 < map.length && !check[i + 1][j] && map[i + 1][j])     rec(i + 1, j ,map,check,count);
            if(i - 1 >= 0 && !check[i - 1][j] && map[i - 1][j])             rec(i - 1, j ,map,check,count);
            if(j + 1 < map[0].length && !check[i][j + 1] && map[i][j + 1])  rec(i, j + 1 ,map,check,count);
            if(j - 1 >= 0 && !check[i][j - 1] && map[i][j - 1])             rec(i, j - 1 ,map,check,count);
        }


        var count = 1;

        var forCheck = createMassForCheck(map);

        for(var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++)
                if (map[i][j]) {
                    if(!forCheck[i][j]){
                        rec(i,j,map,forCheck,count);
                        count++;
                    }
                }
        }

        return count - 1;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
