const Notification = (props) => {
    let specialClasses = '';
  
    if (props.status === 'error') {
      specialClasses = 'alert-primary';
    }
    if (props.status === 'success') {
      specialClasses = 'alert-success';
    }
    if (props.status === 'pending') {
        specialClasses = 'alert-secondary';
    }
  
    const cssClasses = `alert ${specialClasses}`;
  
    return (
      <div className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    );
  };
  
  export default Notification;