package userservice.repository;

import org.springframework.data.repository.CrudRepository;
import userservice.model.User;
/**
 * repository for User Entity
 */
public interface UserRepository extends CrudRepository<User, Long> {
    User getUserByLogin(String login);
}
