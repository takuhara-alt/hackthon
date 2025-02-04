import React from "react";


const settinfback = () => {
    if (window.confirm('変更内容が保存されていません。移動しますか？')) {
        window.location.href = '/setting';
    }
}
const reset = () => {
    if (window.confirm('変更内容を破棄しますか？')) {
        window.location.href = '/profile-setting';
    }
}
const keep = () => {
    if (window.confirm('保存が完了しました。')) {
        window.location.href = '/setting';
    }
}
const ProfileSetting: React.FC = () => {
  return (
    <div>
        <h1>プロフィール設定</h1>
        <p>名前: <input type="text" /></p>
        <p>年齢: <input type="number" /></p>
        <p>性別: <input type="text" id="sex" list="sexlist" />
            <datalist id="sexlist">
                <option value="男性" />
                <option value="女性" />
                <option value="その他" />
            </datalist>
        </p>
        <div>
            <p><a href="/setting" onClick={settinfback}>戻る</a></p>
            <input type="reset" value={"リセット"} onClick={reset}/>
            <input type="submit" value={"保存"} onClick={keep}/>
        </div>
        
    </div>

    
  );
};
export default ProfileSetting;