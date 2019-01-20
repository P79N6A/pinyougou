app.controller('baseController',function($scope){
    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1, //当前页码
        totalItems: 10, //总记录数
        itemsPerPage: 10, //每页记录数
        perPageOptions: [10,20,30,40,50], //分页选项
        onChange: function(){   //当页码变更后自动触发的方法
            $scope.reloadList();//调用刷新方法 重新加载
        }
    };

    //刷新列表
    $scope.reloadList=function(){
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }

    $scope.selectIds=[];//用户勾选的ID集合
    //获得用户勾选的集合
    $scope.updateSelection=function($event,id){
        if($event.target.checked){
            //向集合中添加元素
            $scope.selectIds.push(id);
        }else{
            //查找值的位置
            var index = $scope.selectIds.indexOf(id);
            //index ：移除的位置   1：移除的个数
            $scope.selectIds.splice(index,1);
        }
    }

    $scope.jsonToString=function (jsonString, key) {
        var json = JSON.parse(jsonString);
        var value="";

        for (var i=0 ;i<json.length;i++){
            if (i>0){
                value+=",";
            }
            value +=json[i][key];
        }
        return value;
    }

    //从集合中按照key查询对象
    $scope.searchObjectByKey=function (list, key, keyValue) {
        for(var  i=0;i<list.length;i++){
            if(list[i][key]==keyValue){
                return list[i];
            }
        }
        return null;
    }
});