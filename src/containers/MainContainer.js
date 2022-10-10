import React from 'react';
import DrumLooper from '../components/DrumLooper';
import NewPracticeItem from '../components/NewPracticeItem';
import PracticeItem from '../components/PracticeItem';

const MainContainer = () => {

    const [items, setItems] = useState([]);
  
  
    useEffect(() => {
      const request = new Request()
      request.get("/api/items")
        .then((data) => {
          setItems(data);
        })
    }, [])
  
    const findItemById = (id) => {
      return items.find((item) => {
        return item.id === parseInt(id)
      })
    }
  
    const handeDelete = (id) => {
      const request = new Request();
      const url ='/api/items/' + id;
      request.delete(url).then(() => {
        window.location = '/items'
      })
    }
  
    const handlePost = (item) => {
      const request = new Request();
      request.post('/api/items/', item)
      .then(() => {
        window.location = '/items'
      })
    }
  
    const itemDetailWrapper = () => {
      const { id } = useParams()
      let foundItem = findItemById(id)
      return <PracticeItem item={foundItem} handleDelete={handeDelete}/>
    }

    const itemsList = items.map((item, index) => {
        return (
            <li key={index}>
                <div>
                    <PracticeItem item={item} />
                </div>
            </li>
        )
    })

    return (
        <p>
            <ul>
                {itemsList}
            </ul>
            <DrumLooper />
            <Review />
            <NewPracticeItem />

        </p>
    );
}

export default MainContainer;