import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NfcPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to specified route immediately
    navigate('/first-year-guide');
  }, [navigate]);

  return null;
}
