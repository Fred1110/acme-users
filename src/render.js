const render = ({userNameList, userName, userDetail, curr}) => {
  const html = `
    ${ userName.map((userName, idx) => `
        <li>
        <a href = '#${idx}'>${userName}</a>
        ${
          curr === idx ? `
            <ul>
            ${
              userDetail[userName].map(detail => `
                <li>
                ${detail}
                </li>
              `).join('')
            }
            </ul>
          `: ''
        }
        </li>
    `).join('')
    }
  `;
  userNameList.innerHTML = html;
}

module.exports = render
