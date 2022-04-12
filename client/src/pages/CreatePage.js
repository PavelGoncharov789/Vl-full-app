import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  let navigate = useNavigate()
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        navigate(`/detail/${data.link._id}`, { replace: true });

      } catch (e) {
        console.log(e.message, "ошибка у");
      }
    }
  };
  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ padingTop: "2rem" }}>
        <div className="input-field " style={{ marginTop: 0 }}>
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            name="email"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
        </div>
        <label>Введите ссылку</label>
      </div>
    </div>
  );
};
