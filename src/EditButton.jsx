function EditButton() {

  function handleClick() {
    const boxes = document.querySelectorAll('.box');
    const anchors = document.querySelectorAll('.del');
    boxes.forEach(box => {
      box.classList.toggle('active');
    })
    anchors.forEach(a => {
      a.classList.toggle('vis-a');
    })
  }

  return <button className="edit" onClick={handleClick}>Edit</button>;
}

export default EditButton;