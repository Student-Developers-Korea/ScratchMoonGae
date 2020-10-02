var un = prompt("Username?","")
fetch('https://scratch.mit.edu/site-api/users/all/', {
method: 'PUT',
body: '{"username":Username,"thumbnail_url":"//uploads.scratch.mit.edu/users/avatars/default.png","comments_allowed":false,"bio":"[Breaking News]Scratch Finish Up with NOTHING","featured_project_label_name":"특집 프로젝트","featured_project_data":null,"featured_project":null,"featured_project_label_id":null,"status":"ahdslfhasdkjfhlkashldkjfhalsdjhflkashdflkjhaslkjdfhlkjashlkfhaslkjdhflkjashdlkjfhalskjdhflkjashdkljfhalkdsjhfkjasdh"}',
headers: {
'Content-Type': 'application/json'
}
})
