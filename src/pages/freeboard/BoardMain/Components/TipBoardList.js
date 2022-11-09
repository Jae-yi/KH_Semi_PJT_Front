import { useState, useEffect } from 'react';
import Api from '../../../../api/FbApi';
// import '../App.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import '../../FreeBoardStyle.css'


const TipBoardList = () => {
  const [tipBoardList, setTipBoardList] = useState('');
  const [loading, setLoading] = useState(false);

  const onClickBoardDetail = (val) => {
    console.log("게시글 상세페이지로 이동 : " + val);
    window.localStorage.setItem("Detail", val);
    window.location.replace("/BoardDetail");
  } 

  useEffect(() => {
    const BoardData = async () => {
      setLoading(true);
      try {
        const response = await Api.tipBoardList();
        setTipBoardList(response.data);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    BoardData();
  }, []);

  if (loading) {
    return <p>로딩중.. 잠시만 기다려주세요</p>
  }

  return (
    <div className="BoardListTable">
      <Table className="fBoardTable">
        <thead>
          <tr>
            <th>글번호</th>
            <th>분류</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {console.log(tipBoardList)}
          {tipBoardList && tipBoardList.map((list) => (
            <tr key={list.fb_id} onClick={()=>onClickBoardDetail(list.fb_id)}>
            <td>{list.fb_id}</td>
            <td>{list.fb_category}</td>
            {/* html 태그 안 보이도록 정규식 적용 */}
            <td>{(list.fb_title).replace(/<[^>]*>?/g,'')} [{list.fb_comment_count}]</td>
            <td>{list.fb_user_id}</td>
            <td>{list.fb_c_date}</td>
            <td>{list.fb_hit}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}
export default TipBoardList;