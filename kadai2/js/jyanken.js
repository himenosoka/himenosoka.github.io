var max=3,min=1;//1~3までの最大値と最小値
var point_p=0,point_c=0;//プレイヤーとコンピュータの勝ち数(ポイント)、0で初期化

    function jyanken(player_hand){
        var player="";
        var rand=Math.floor(Math.random()*(max+1-min))+min;//1~3の乱数作成
        var computer="";
        
        /*---コンピュータの手の確定処理---*/
        if(rand==1){//乱数が1だったらコンピュータの手はグ―
            computer="グー";
        }
        else if(rand==2){//乱数が2だったらコンピュータの手はチョキ
            computer="チョキ";
        }
        else{//乱数が3だったらコンピュータの手はパー
            computer="パー";
        }

        /*---プレイヤーの手の確定処理---*/
        if(player_hand==1){
            player="グー";
        }
        else if(player_hand==2){
            player="チョキ";
        }
        else{
            player="パー";
        }
        alert("あなたの手="+player+"\nコンピュータの手="+computer+"");//両者の手の表示

        /*---じゃんけんの勝敗の判定---*/
        if(rand==player_hand){//同じ手(あいこ)の場合(数字で比較)
            alert("あいこです\nあなた="+point_p+"勝\nコンピュータ="+point_c+"勝");//あいこであることと、現在の両者の総勝数の表示
        }
        else if((rand==1&&player_hand==3)||(rand==2&&player_hand==1)||(rand==3&&player_hand==2)){//プレイヤーが勝ちの場合(数字で比較)
            point_p++;//プレイヤー勝利ポイントを1点加算する
            alert("あなたの勝ちです\nあなた="+point_p+"勝\nコンピュータ="+point_c+"勝");//勝者と、現在の両者の総勝数の表示
            $('#jyanken-sesult).append("<p>あなたの勝ちです\nあなた="+point_p+"勝\nコンピュータ="+point_c+"勝"</p>);
        }
        else if((rand==1&&player_hand==2)||(rand==2&&player_hand==3)||(rand==3&&player_hand==1)){//コンピュータが勝ちの場合(数字で比較)
            point_c++;//コンピュータ勝利ポイントを1点加算する
            //alert("コンピュータの勝ちです\nあなた="+point_p+"勝\nコンピュータ="+point_c+"勝"); //勝者と、現在の両者の総勝数の表示
        }
        
        /*---最終的な勝敗の判定---*/
        if(point_c==3){//コンピュータの勝利ポイントが3点になった場合
            //alert("コンピュータが3勝しました");//最終的な勝者の表示
            point_c=point_p=0;//コンピュータとプレイヤーの勝利ポイントを0に戻す
        }
        else if(point_p==3){//プレイヤーの勝利ポイントが3点になった場合
            //alert("あなたが3勝しました");//最終的な勝者の表示
            point_c=point_p=0;//コンピュータとプレイヤーの勝利ポイントを0に戻す
        }

    }


